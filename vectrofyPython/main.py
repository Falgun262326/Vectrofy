from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
<<<<<<< HEAD
import cv2
import numpy as np

app = Flask(__name__)
CORS(app, origins=["https://vectrofy-frontend.onrender.com"])


@app.route('/convert', methods=['POST'])
def convert_image():
    file = request.files['file']
    threshold = int(request.form.get('threshold', 128))

    image = Image.open(file)
    image = image.convert('L')
    image_np = np.array(image)

    _, binary_image = cv2.threshold(image_np, threshold, 255, cv2.THRESH_BINARY)

    contours, _ = cv2.findContours(binary_image, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    svg_data = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1">\n'

    for contour in contours:
        path_data = "M " + " L ".join(f"{pt[0][0]},{pt[0][1]}" for pt in contour)
        svg_data += f'<path d="{path_data} Z" fill="black" stroke="none" />\n'

    svg_data += '</svg>'

    return jsonify({"svg": svg_data})


if __name__ == '__main__':
    app.run(debug=True)
=======
from skimage import io, color, measure
from sklearn.cluster import KMeans
import numpy as np
import svgwrite
import os
from werkzeug.middleware.proxy_fix import ProxyFix

app = Flask(__name__)
app.wsgi_app = ProxyFix(app.wsgi_app)
CORS(app)

app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024

@app.route('/convert', methods=['POST'])
def convert_image_to_svg():
    file = request.files.get('file')
    num_colors = int(request.form.get('num_colors', 8))  # Default to 8 colors

    if not file:
        return jsonify({'error': 'No file uploaded'}), 400

    try:
        # Read the image
        image = io.imread(file)

        # Remove alpha channel if present
        if image.shape[-1] == 4:  # Check for alpha channel
            image = color.rgba2rgb(image)

        height, width, _ = image.shape

        # Convert to LAB color space
        lab_image = color.rgb2lab(image)
        flat_lab = lab_image.reshape((-1, 3))

        # Apply K-Means clustering
        kmeans = KMeans(n_clusters=num_colors, random_state=42)
        kmeans.fit(flat_lab)
        labels = kmeans.labels_
        cluster_centers = kmeans.cluster_centers_

        # Prepare SVG file
        dwg = svgwrite.Drawing(size=(width, height))
        for color_idx in range(num_colors):
            mask = (labels.reshape((height, width)) == color_idx).astype(np.uint8)
            contours = measure.find_contours(mask, level=0.5)

            for contour in contours:
                points = [(int(pt[1]), int(pt[0])) for pt in contour]
                path_data = "M " + " L ".join(f"{x},{y}" for x, y in points) + " Z"
                fill_color = color.lab2rgb([cluster_centers[color_idx]])[0]  # LAB to RGB
                rgb_color = tuple(int(255 * c) for c in fill_color)
                dwg.add(
                    dwg.path(
                        d=path_data,
                        fill=svgwrite.utils.rgb(*rgb_color),
                        stroke_width=0
                    )
                )

        # Generate SVG as string
        svg_data = dwg.tostring()
        return jsonify({'svg': svg_data}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=8080)
>>>>>>> 646c1f5 (first commit)

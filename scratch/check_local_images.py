import os
from PIL import Image

images_dir = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images"

print("=== Images in public/images ===")
for root, dirs, files in os.walk(images_dir):
    for f in files:
        if f.lower().endswith(('.png', '.jpg', '.jpeg', '.webp')):
            path = os.path.join(root, f)
            try:
                with Image.open(path) as img:
                    print(f"File: {f}, format: {img.format}, size: {img.size}, bytes: {os.path.getsize(path)}")
            except Exception as e:
                print(f"Error reading {f}: {e}")

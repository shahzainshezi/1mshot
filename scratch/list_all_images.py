import os
from PIL import Image

images_dir = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images"
files = os.listdir(images_dir)

print("--- SVG Files in public/images ---")
for f in sorted(files):
    if f.lower().endswith('.svg'):
        path = os.path.join(images_dir, f)
        print(f"{f}: {os.path.getsize(path)} bytes")

print("--- PNG Files in public/images ---")
for f in sorted(files):
    if f.lower().endswith('.png'):
        path = os.path.join(images_dir, f)
        try:
            with Image.open(path) as img:
                print(f"{f}: Size={img.size}, Mode={img.mode}, Bytes={os.path.getsize(path)}")
        except Exception as e:
            print(f"Error opening {f}: {e}")

from PIL import Image
import os

unzipped_dir = r"C:\Users\HAJI LAPTOP g55\Downloads\Untitled_design_unzipped"
for f in ["1.png", "2.png", "3.png"]:
    path = os.path.join(unzipped_dir, f)
    if os.path.exists(path):
        with Image.open(path) as img:
            print(f"{f}: Size={img.size}, Mode={img.mode}, Format={img.format}")

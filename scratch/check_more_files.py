from PIL import Image
import os

downloads_dir = r"C:\Users\HAJI LAPTOP g55\Downloads"
files = ["Frame 112.png", "Frame 143.png", "Group 6.png", "image 51.png"]

for f in files:
    path = os.path.join(downloads_dir, f)
    if os.path.exists(path):
        with Image.open(path) as img:
            print(f"{f}: Size={img.size}, Mode={img.mode}, Format={img.format}")
    else:
        print(f"{f} not found")

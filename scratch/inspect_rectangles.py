from PIL import Image
import os

downloads = r"C:\Users\HAJI LAPTOP g55\Downloads"
for name in ["Rectangle.png", "Rectangle-327.png"]:
    path = os.path.join(downloads, name)
    if os.path.exists(path):
        with Image.open(path) as img:
            print(f"{name}: Size={img.size}, Mode={img.mode}")
    else:
        print(f"{name} not found")

from PIL import Image
import os

path = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images\frame_20.png"
if os.path.exists(path):
    with Image.open(path) as img:
        print(f"Frame 20: Size={img.size}, Mode={img.mode}, Format={img.format}")
else:
    print(f"File not found at {path}")

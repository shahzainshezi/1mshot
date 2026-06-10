from PIL import Image
import os

img_dir = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images"
left_path = os.path.join(img_dir, "format_player_left.png")
right_path = os.path.join(img_dir, "format_player_right.png")

for name, path in [("Left Player", left_path), ("Right Player", right_path)]:
    if os.path.exists(path):
        with Image.open(path) as img:
            print(f"{name}: Size={img.size}, Aspect Ratio={img.size[0]/img.size[1]:.4f}")
    else:
        print(f"{name} does not exist at {path}")

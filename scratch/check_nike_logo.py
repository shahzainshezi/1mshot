from PIL import Image
import numpy as np
import os

path = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images\nike_logo.png"
if os.path.exists(path):
    with Image.open(path) as img:
        img_np = np.array(img)
        # Find non-transparent pixels
        if img_np.shape[2] == 4:
            alpha = img_np[:, :, 3]
            coords = np.argwhere(alpha > 10)
            if coords.size > 0:
                y_min, x_min = coords.min(axis=0)
                y_max, x_max = coords.max(axis=0)
                print(f"nike_logo: Size={img.size}, Bounding Box = {x_max-x_min}x{y_max-y_min}")
            else:
                print("nike_logo is completely transparent")
        else:
            print("nike_logo has no alpha channel")
else:
    print("nike_logo not found")

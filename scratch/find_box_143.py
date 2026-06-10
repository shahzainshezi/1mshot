from PIL import Image
import numpy as np
import os

path = r"C:\Users\HAJI LAPTOP g55\Downloads\Frame 143.png"
if os.path.exists(path):
    with Image.open(path) as img:
        img_np = np.array(img)
        if img_np.shape[2] == 4:
            alpha = img_np[:, :, 3]
            coords = np.argwhere(alpha > 10)
            if coords.size > 0:
                y_min, x_min = coords.min(axis=0)
                y_max, x_max = coords.max(axis=0)
                print(f"Frame 143: X=[{x_min}, {x_max}], Y=[{y_min}, {y_max}], Size={x_max-x_min}x{y_max-y_min}")
            else:
                print("Frame 143 is entirely transparent")
        else:
            print("Frame 143 has no alpha channel")
else:
    print("Frame 143 not found")

from PIL import Image
import numpy as np
import os

unzipped_dir = r"C:\Users\HAJI LAPTOP g55\Downloads\Untitled_design_unzipped"

for f in ["2.png", "3.png"]:
    path = os.path.join(unzipped_dir, f)
    if os.path.exists(path):
        with Image.open(path) as img:
            img_np = np.array(img)
            alpha = img_np[:, :, 3]
            # Find bounding box of non-transparent pixels
            coords = np.argwhere(alpha > 10)
            if coords.size > 0:
                y_min, x_min = coords.min(axis=0)
                y_max, x_max = coords.max(axis=0)
                print(f"{f}: Non-transparent bounding box: X=[{x_min}, {x_max}], Y=[{y_min}, {y_max}], Size={x_max-x_min}x{y_max-y_min}")
            else:
                print(f"{f}: Entirely transparent")

from PIL import Image
import os
import numpy as np

path = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images\frame_20.png"
if os.path.exists(path):
    with Image.open(path) as img:
        img_np = np.array(img)
        if img_np.shape[2] == 4:
            alpha = img_np[:, :, 3]
            num_transparent = np.sum(alpha < 5)
            num_opaque = np.sum(alpha > 250)
            total = alpha.size
            print(f"Transparent pixels: {num_transparent/total:.2%}, Opaque: {num_opaque/total:.2%}")
        else:
            print("No alpha channel")
else:
    print("File not found")

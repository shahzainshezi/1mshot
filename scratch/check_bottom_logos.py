from PIL import Image
import numpy as np
import os

path = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images\group_6.png"
if os.path.exists(path):
    with Image.open(path) as img:
        img_np = np.array(img)
        # Check alpha channel of bottom 50% of the image
        height = img_np.shape[0]
        bottom_half = img_np[int(height*0.5):, :, :]
        if bottom_half.shape[2] == 4:
            alpha = bottom_half[:, :, 3]
            non_trans = np.sum(alpha > 10)
            print(f"Non-transparent pixels in bottom half: {non_trans} ({non_trans/alpha.size:.2%})")
        else:
            # check grayscale intensity of bottom half
            gray = np.mean(bottom_half[:, :, :3], axis=2)
            non_black = np.sum(gray > 10)
            print(f"Non-black pixels in bottom half: {non_black} ({non_black/gray.size:.2%})")
else:
    print("group_6.png not found")

from PIL import Image
import os

img_path = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images\group_6.png"
out_dir = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images"

if os.path.exists(img_path):
    img = Image.open(img_path)
    width, height = img.size
    
    # First column is 320px wide (1600 / 5).
    # Crop the top half (0 to 110px) to isolate the Nike swoosh from the subtext.
    nike_crop = img.crop((0, 0, 320, 110))
    nike_crop.save(os.path.join(out_dir, "nike_logo.png"))
    print("Saved nike_logo.png successfully")
else:
    print("group_6.png not found")

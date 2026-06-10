from PIL import Image
import numpy as np

im = Image.open(r"C:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images\hero_mobile_bg.png")
w, h = im.size
# Let's inspect the top 1000 rows, look for bright colors (e.g. red/orange rim or net pixels)
# Let's save a summary of row brightness or non-black pixels
arr = np.array(im.convert("RGB"))
for y in range(0, min(1200, h), 20):
    row = arr[y, :, :]
    # calculate average color of the row
    avg_color = row.mean(axis=0)
    # count pixels that are not very dark (sum of RGB > 100)
    bright_pixels = np.sum(np.sum(row, axis=1) > 100)
    print(f"Row {y:04d}: Avg RGB = {avg_color.astype(int)}, Bright pixels count = {bright_pixels}")

from PIL import Image
import numpy as np

im = Image.open(r"C:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images\hero_mobile_bg.png")
w, h = im.size
arr = np.array(im.convert("RGB"))

# Let's search for pixels matching standard orange/red of a basketball rim/ball:
# R is relatively high, G is moderate, B is low
orange_coords = []
white_coords = []

for y in range(h):
    for x in range(w):
        r, g, b = arr[y, x]
        # Check for orange-ish (rim or basketball)
        if r > 100 and g > 40 and r > g + 20 and b < 80:
            orange_coords.append((x, y, (r,g,b)))
        # Check for bright white/light grey (net or glow)
        if r > 180 and g > 180 and b > 180:
            white_coords.append((x, y, (r,g,b)))

if orange_coords:
    min_oy = min(coord[1] for coord in orange_coords)
    max_oy = max(coord[1] for coord in orange_coords)
    print(f"Orange/Rim found: Y from {min_oy} to {max_oy}")
else:
    print("No orange/rim pixels found")

if white_coords:
    min_wy = min(coord[1] for coord in white_coords)
    max_wy = max(coord[1] for coord in white_coords)
    print(f"White/Net found: Y from {min_wy} to {max_wy}")
else:
    print("No white/net pixels found")

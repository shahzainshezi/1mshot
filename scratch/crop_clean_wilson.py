from PIL import Image
import os

mockup_path = r"C:\Users\HAJI LAPTOP g55\.gemini\antigravity-ide\brain\b8699fe3-fa03-4ec8-966b-41ad7184d168\media__1781006929718.png"
out_dir = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images"

if os.path.exists(mockup_path):
    img = Image.open(mockup_path)
    width, height = img.size
    
    # Wilson is the second column (index 1 of 5 columns)
    col_width = width / 5.0
    left = int(1 * col_width)
    right = int(2 * col_width)
    
    # Crop only the top half of the height to get just the logo text (excluding the glow line and labels)
    top = 0
    bottom = int(height * 0.55) # Crop top 55%
    
    cropped = img.crop((left, top, right, bottom))
    
    # Convert to RGBA and make dark background transparent
    cropped_rgba = cropped.convert("RGBA")
    data = cropped_rgba.getdata()
    new_data = []
    for pixel in data:
        # If the pixel is very dark (R, G, B < 25), make it transparent
        if pixel[0] < 25 and pixel[1] < 25 and pixel[2] < 25:
            new_data.append((0, 0, 0, 0))
        else:
            new_data.append(pixel)
            
    cropped_rgba.putdata(new_data)
    
    # Crop to bounding box of the non-transparent pixels
    bbox = cropped_rgba.getbbox()
    if bbox:
        logo = cropped_rgba.crop(bbox)
    else:
        logo = cropped_rgba
        
    out_name = "wilson_logo_clean.png"
    logo.save(os.path.join(out_dir, out_name))
    print(f"Extracted clean Wilson logo script, size={logo.size}, saved as {out_name}")
else:
    print("Mockup not found")

from PIL import Image
import os

mockup_path = r"C:\Users\HAJI LAPTOP g55\.gemini\antigravity-ide\brain\b8699fe3-fa03-4ec8-966b-41ad7184d168\media__1781006929718.png"
out_dir = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images"

if os.path.exists(mockup_path):
    img = Image.open(mockup_path)
    width, height = img.size
    print(f"Mockup size: {width}x{height}")
    
    # Split into 5 equal horizontal columns
    col_width = width / 5.0
    
    brand_names = ["nike", "wilson", "espn", "gatorade", "overtime"]
    
    for i in range(5):
        left = int(i * col_width)
        top = 0
        right = int((i + 1) * col_width)
        bottom = height
        
        # Crop the column
        cropped = img.crop((left, top, right, bottom))
        
        # Now, let's crop the actual logo inside this column by finding the bounding box of non-transparent (or non-black) pixels.
        # Since the mockup has a dark background (almost black), we can make pixels close to black transparent,
        # and then crop to the bounding box of the logo.
        # Let's convert to RGBA
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
        bbox = cropped_rgba.getbbox()
        if bbox:
            logo = cropped_rgba.crop(bbox)
        else:
            logo = cropped_rgba
            
        out_name = f"{brand_names[i]}_logo_extracted.png"
        logo.save(os.path.join(out_dir, out_name))
        print(f"Extracted {brand_names[i]} logo, size={logo.size}, saved as {out_name}")
else:
    print("Mockup not found")

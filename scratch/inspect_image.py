import os
from PIL import Image

def crop_player_image():
    src_path = r"C:\Users\HAJI LAPTOP g55\Downloads\Screenshot 2026-04-27 164940 1.png"
    dest_path = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images\hiw_player_cropped.png"

    if not os.path.exists(src_path):
        print(f"Source file not found at {src_path}")
        return

    img = Image.open(src_path)
    print(f"Original image size: {img.size}, mode: {img.mode}")

    # Convert to RGBA if not already
    if img.mode != 'RGBA':
        img = img.convert('RGBA')

    # If it is a full screenshot containing the player in the middle and black background,
    # let's make the background transparent.
    # We can detect background by checking pixels that are black or close to black.
    datas = img.getdata()
    new_data = []
    
    # We will make pixels that are very dark (R, G, B < 25) transparent
    for item in datas:
        # item is (R, G, B, A)
        if item[0] < 20 and item[1] < 20 and item[2] < 20:
            new_data.append((0, 0, 0, 0)) # transparent
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    
    # Get the bounding box of the non-transparent area
    bbox = img.getbbox()
    if bbox:
        cropped_img = img.crop(bbox)
        # Resize/Save the cropped image
        cropped_img.save(dest_path, "PNG")
        print(f"Cropped image successfully! New size: {cropped_img.size}")
        print(f"Saved to {dest_path}")
    else:
        print("Could not find a bounding box. Saving original as RGBA.")
        img.save(dest_path, "PNG")

if __name__ == "__main__":
    crop_player_image()

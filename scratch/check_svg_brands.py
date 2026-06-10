import os

images_dir = r"c:\Users\HAJI LAPTOP g55\Desktop\pratice anti graty\1mshot\public\images"
files = ["image_69.svg", "image_68.svg", "rectangle_22.svg", "mask_group_8.svg", "image_66.svg"]

for f in files:
    path = os.path.join(images_dir, f)
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as file:
            content = file.read()
        
        # Check if there is specific brand text or class in the SVG code
        print(f"--- {f} ---")
        print(f"File size: {len(content)} bytes")
        
        # Search for text matching some known strings
        for brand in ["nike", "wilson", "espn", "gatorade", "overtime", "glow", "rect", "gradient"]:
            if brand in content.lower():
                print(f"  Matches keyword: {brand}")
                
        # Print the first 250 characters of the SVG to understand its structure
        print(f"  Preview: {content[:250]}...\n")
    else:
        print(f"{f} not found")

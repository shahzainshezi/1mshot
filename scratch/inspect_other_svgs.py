import os
import xml.etree.ElementTree as ET

downloads = r"C:\Users\HAJI LAPTOP g55\Downloads"

# Let's inspect some of the SVGs in Downloads that might be logos
candidates = [
    "1MSHOTArtboard 7 2.svg",
    "Group 1171274769.svg",
    "Group 117127476955.svg",
    "Group 11712747695588.svg",
    "Group 1171274769999.svg",
    "Group 153.svg",
    "Group 192.svg",
    "Group 193.svg",
    "Group 194.svg",
    "Group 195.svg",
    "Group 196.svg",
    "Group 197.svg",
    "Group 3.svg",
    "New-Logo.svg",
    "Logo (1).svg"
]

for f in candidates:
    path = os.path.join(downloads, f)
    if os.path.exists(path):
        size = os.path.getsize(path)
        print(f"--- {f} ({size} bytes) ---")
        try:
            with open(path, 'r', encoding='utf-8', errors='ignore') as file:
                content = file.read()
            # Check for keywords
            for keyword in ["wilson", "nike", "espn", "gatorade", "overtime", "logo", "path"]:
                if keyword in content.lower():
                    print(f"  Matches keyword: {keyword}")
            print(f"  Preview: {content[:200]}...")
        except Exception as e:
            print(f"  Error: {e}")

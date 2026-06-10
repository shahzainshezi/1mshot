import os
import re
from PIL import Image

def optimize_images():
    public_dir = "public"
    src_dir = "src"
    
    # 1. Find and convert PNGs > 20KB to WebP
    converted_mappings = {} # original_name -> new_name
    
    for root, dirs, files in os.walk(public_dir):
        for file in files:
            if file.lower().endswith(".png"):
                file_path = os.path.join(root, file)
                file_size_kb = os.path.getsize(file_path) / 1024
                
                # Only optimize images larger than 20KB (leaving small icons alone)
                if file_size_kb > 20:
                    base_name = os.path.splitext(file)[0]
                    webp_file = f"{base_name}.webp"
                    webp_path = os.path.join(root, webp_file)
                    
                    print(f"Compressing {file} ({file_size_kb:.1f} KB) to WebP...")
                    try:
                        with Image.open(file_path) as img:
                            # Convert RGBA to RGB if saving to webp without alpha, 
                            # but webp supports alpha, so we keep the mode.
                            img.save(webp_path, "WEBP", quality=80)
                        
                        new_size_kb = os.path.getsize(webp_path) / 1024
                        print(f"  -> Saved {webp_file} ({new_size_kb:.1f} KB) [Reduced by {((file_size_kb - new_size_kb)/file_size_kb)*100:.1f}%]")
                        
                        # Store mapping relative to public folder (e.g., /images/xxx.png -> /images/xxx.webp)
                        rel_old = file_path.replace(public_dir, "").replace("\\", "/")
                        rel_new = webp_path.replace(public_dir, "").replace("\\", "/")
                        converted_mappings[rel_old] = rel_new
                        
                        # Delete original PNG to save space
                        os.remove(file_path)
                    except Exception as e:
                        print(f"Error compressing {file}: {e}")
                        
    if not converted_mappings:
        print("No images needed optimization.")
        return
        
    print(f"\nConverted {len(converted_mappings)} images. Updating source code references...")
    
    # 2. Update code references in src/ and public/ (for SVGs that reference PNGs, if any)
    for root, dirs, files in os.walk(src_dir):
        for file in files:
            if file.lower().endswith((".tsx", ".ts", ".css", ".js")):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        content = f.read()
                        
                    modified = False
                    for old_rel, new_rel in converted_mappings.items():
                        # Match occurrences like "/images/xxx.png"
                        if old_rel in content:
                            content = content.replace(old_rel, new_rel)
                            modified = True
                            print(f"  Updated reference {old_rel} -> {new_rel} in {file}")
                            
                        # Also check without leading slash (e.g., "images/xxx.png")
                        old_no_slash = old_rel.lstrip("/")
                        new_no_slash = new_rel.lstrip("/")
                        if old_no_slash in content:
                            content = content.replace(old_no_slash, new_no_slash)
                            modified = True
                            print(f"  Updated reference {old_no_slash} -> {new_no_slash} in {file}")
                            
                    if modified:
                        with open(file_path, "w", encoding="utf-8") as f:
                            f.write(content)
                except Exception as e:
                    print(f"Error updating file {file}: {e}")
                    
    print("\nOptimization completed successfully!")

if __name__ == "__main__":
    optimize_images()

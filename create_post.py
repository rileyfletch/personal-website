"""
Blog post creator script.
Parses .md files and converts to .tsx.
"""
import sys
import os
from pathlib import Path

def get_blog_content(name: str):
    content = []
    header = f"""
import Navigation from "@/components/navbar";
        
export default function {name}() {{
    return (
        <main className="bg-cream text-black">
            <header className="bg-cream sticky top-0 z-50">
                <Navigation ></Navigation>
                <hr className=" h-0.2 mx-auto text-dcream bg-dcream"></hr>
            </header>

            <div className="flex flex-col items-center mb-10">
                <div className="max-w-xl mx-auto space-y-5 mt-10">
    """
    closer = f"""
                </div>
            </div>
        </main>
    );
}}
    """
    content.append(header)
    content.append(closer)
    return content

def create_file(name: str):
    path = Path('app') / '(posts)' / name / "page.tsx"
    try:
        with open(path, 'w') as file:
            content: list = get_blog_content(name)
            for line in content:
                file.write(line)
        print(f'Blog content written to: (posts)/{name}/page.tsx')
    except IOError as e:
        print(f'Error: {e}')

def build_folder(name: str):
    path = Path('app') / '(posts)' / name
    
    if path.exists() and path.is_dir():
        print(f'Folder "{path}" exists.')
        create_file(name)
    else:
        print(f'Folder "{path}" does not exist.')
        os.mkdir(path)
        print(f'Folder "{path}" has been created.')
        create_file(name)

def create_post(name: str):
    build_folder(name)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <folder_name>")
    else:
        create_post(sys.argv[1])
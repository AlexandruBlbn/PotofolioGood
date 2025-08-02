# empty
#!/usr/bin/env python3
import os
import json
import subprocess

def load_data(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_data(path, data):
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"Updated {path}")
    # Git add, commit and push the changes automatically
    try:
        repo_dir = os.path.dirname(os.path.abspath(__file__))
        subprocess.check_call(['git', 'add', path], cwd=repo_dir)
        commit_msg = f"chore: update {os.path.basename(path)}"
        subprocess.check_call(['git', 'commit', '-m', commit_msg], cwd=repo_dir)
        subprocess.check_call(['git', 'push', 'origin', 'main'], cwd=repo_dir)
        print('Changes pushed to main branch.')
    except subprocess.CalledProcessError as e:
        print(f'Git operation failed: {e}')

def prompt_career_entry(existing=None):
    year = input(f"Year [{existing['year'] if existing else ''}]: ") or (existing and existing['year'])
    title = input(f"Title [{existing['title'] if existing else ''}]: ") or (existing and existing['title'])
    company = input(f"Company [{existing['company'] if existing else ''}]: ") or (existing and existing['company'])
    description = input(f"Description [{existing['description'] if existing else ''}]: ") or (existing and existing['description'])
    return {"year": year, "title": title, "company": company, "description": description}

def prompt_project_entry(existing=None):
    # Auto-generate or retain ID; no prompt
    id_ = existing['id'] if existing else None
    title = input(f"Title [{existing['title'] if existing else ''}]: ") or (existing and existing['title'])
    description = input(f"Description [{existing['description'] if existing else ''}]: ") or (existing and existing['description'])
    category = input(f"Category [{existing['category'] if existing else ''}]: ") or (existing and existing['category'])
    tags_input = input(f"Tags comma-separated [{', '.join(existing['tags']) if existing else ''}]: ")
    tags = [t.strip() for t in (tags_input.split(',') if tags_input else (existing and existing['tags'])) if t]
    featured_input = input(f"Featured? (y/n) [{ 'y' if existing and existing.get('featured') else 'n'}]: ") or ('y' if existing and existing.get('featured') else 'n')
    featured = featured_input.lower() in ('y', 'yes')
    images_input = input(f"Images comma-separated [{', '.join(existing['images']) if existing else ''}]: ")
    images = [img.strip() for img in (images_input.split(',') if images_input else (existing and existing['images'])) if img]
    return {"id": id_, "title": title, "description": description, "category": category, "tags": tags, "featured": featured, "images": images}

def select_and_modify(data, prompt_fn):
    for idx, item in enumerate(data):
        label = item.get('title') or item.get('year') or item.get('id')
        print(f"[{idx}] {label}")
    idx = int(input("Select index to modify: "))
    data[idx] = prompt_fn(existing=data[idx])
    return data

def main():
    base = os.path.dirname(os.path.abspath(__file__))
    sec = input("Select section: (1) Career  (2) Projects: ")
    if sec == '1':
        path = os.path.join(base, 'public', 'content', 'career', 'data.json')
        data = load_data(path)
        action = input("Action: (1) Add new  (2) Modify existing  (3) Delete existing: ")
        if action == '1':
            entry = prompt_career_entry()
            data.append(entry)
        elif action == '2':
            data = select_and_modify(data, prompt_career_entry)
        elif action == '3':
            # delete entry
            for idx, item in enumerate(data):
                label = item.get('title') or item.get('year') or item.get('id')
                print(f"[{idx}] {label}")
            idx = int(input("Select index to delete: "))
            removed = data.pop(idx)
            print(f"Removed entry: {removed}")
        else:
            print("Invalid action.")
            return
        save_data(path, data)
    elif sec == '2':
        path = os.path.join(base, 'public', 'content', 'projects', 'data.json')
        data = load_data(path)
        action = input("Action: (1) Add new  (2) Modify existing  (3) Delete existing: ")
        if action == '1':
            entry = prompt_project_entry()
            data.append(entry)
        elif action == '2':
            data = select_and_modify(data, prompt_project_entry)
        elif action == '3':
            # delete entry
            for idx, item in enumerate(data):
                label = item.get('title') or item.get('year') or item.get('id')
                print(f"[{idx}] {label}")
            idx = int(input("Select index to delete: "))
            removed = data.pop(idx)
            print(f"Removed entry: {removed}")
        else:
            print("Invalid action.")
            return
        # Renumber IDs incrementally
        for i, item in enumerate(data, start=1):
            item['id'] = str(i)
        save_data(path, data)
    else:
        print("Invalid section.")

if __name__ == '__main__':
    main()

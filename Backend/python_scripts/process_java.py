# from latest_dictionary import java_dictionary
# import xml.etree.ElementTree as ET
# import sys
# import os

# def validate_java_code(java_code, java_syntax_dictionary):
#     updated_syntax_dictionary = java_syntax_dictionary.copy()
#     for syntax_element, (regex_pattern, count) in updated_syntax_dictionary.items():
#         matches = regex_pattern.findall(java_code)
#         count += len(matches)
#         updated_syntax_dictionary[syntax_element] = (regex_pattern, count)
#     return updated_syntax_dictionary

# def update_mind_map_with_counts(mind_map_file, java_syntax_dictionary):
#     try:
#         tree = ET.parse(mind_map_file)
#         root = tree.getroot()

#         for syntax_element, (_, count) in java_syntax_dictionary.items():
#             if count != 0:
#                 node = next((elem for elem in root.findall(".//node[@TEXT]") if elem.attrib["TEXT"] == syntax_element), None)
#                 if node is None:
#                     node = ET.SubElement(root, 'node', {'TEXT': syntax_element})
#                 count_elem = node.find("./attribute[@NAME='count']")
#                 if count_elem is None:
#                     count_elem = ET.SubElement(node, 'attribute', {'NAME': 'count'})
#                 count_elem.set('VALUE', str(count))

#         tree.write(mind_map_file)
#         print("\n\nMind map file updated successfully\n\n")
#     except (IOError, ET.ParseError) as e:
#         print(f"Error updating mind map: {e}")

# def main():
#     if len(sys.argv) < 3:
#         print("Usage: python process_java.py <java_file_path> <mind_map_file_path>")
#         sys.exit(1)

#     java_code_file = sys.argv[1]  # Java file path
#     mind_map_file = sys.argv[2]   # Knowledge map file path

#     if not os.path.exists(java_code_file):
#         print(f"Error: Java file '{java_code_file}' not found.")
#         sys.exit(1)

#     if not os.path.exists(mind_map_file):
#         print(f"Error: Mind map file '{mind_map_file}' not found.")
#         sys.exit(1)

#     with open(java_code_file, 'r') as file:
#         java_code = file.read()

#     updated_java_dictionary = validate_java_code(java_code, java_dictionary)
#     update_mind_map_with_counts(mind_map_file, updated_java_dictionary)

#     for key, value in updated_java_dictionary.items():
#         print(f'  {key}: {value[1]}')

# if __name__ == "__main__":
#     main()
import sys
import xml.etree.ElementTree as ET
import re
from latest_dictionary import java_dictionary

def validate_java_code(java_code, java_syntax_dictionary):
    updated_syntax_dictionary = java_syntax_dictionary.copy()
    for syntax_element, (regex_pattern, count) in updated_syntax_dictionary.items():
        matches = regex_pattern.findall(java_code)
        count += len(matches)
        updated_syntax_dictionary[syntax_element] = (regex_pattern, count)
    return updated_syntax_dictionary

def update_mind_map_with_counts(mind_map_file, java_syntax_dictionary):
    try:
        tree = ET.parse(mind_map_file)
        root = tree.getroot()

        for syntax_element, (_, count) in java_syntax_dictionary.items():
            if count != 0:
                node = next((elem for elem in root.findall(".//node[@TEXT]") if elem.attrib["TEXT"] == syntax_element),
                            None)
                if node is None:
                    node = ET.SubElement(root, 'node', {'TEXT': syntax_element})
                count_elem = node.find("./attribute[@NAME='count']")
                if count_elem is None:
                    count_elem = ET.SubElement(node, 'attribute', {'NAME': 'count'})
                count_elem.set('VALUE', str(count))

        tree.write(mind_map_file)
        print("\n\nMind map file updated successfully\n\n")
    except (IOError, ET.ParseError) as e:
        print(f"Error updating mind map: {e}")

def main():
    if len(sys.argv) != 3:
        print("Usage: python process_java.py <java_file_path> <mind_map_file>")
        sys.exit(1)

    java_file_path = sys.argv[1]
    mind_map_file = sys.argv[2]

    with open(java_file_path, 'r') as file:
        java_code = file.read()

    updated_java_dictionary = validate_java_code(java_code, java_dictionary)
    update_mind_map_with_counts(mind_map_file, updated_java_dictionary)

    for key, value in updated_java_dictionary.items():
        print(f'  {key}: {value[1]}')

if __name__ == "__main__":
    main()

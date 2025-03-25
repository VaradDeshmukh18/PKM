import re


Int = re.compile(r'\bint\s+(\w+)\s*')

String = re.compile(r'\bString\s+(\w+)\s*')

operator_and_expressions= re.compile(r'[-+*/%]')

float_declaration = re.compile(r'\bfloat\s+(\w+)\s*')

function_declaration = re.compile(r'\b(public|private|protected)?\s+[\w\s]+\([^)]*\)\s*\{(\s.*?\s*)*}\s*')

simple_class = re.compile(r'\b(public|private|protected)?\s+class\s+[A-Za-z_][A-Za-z0-9_]*\s*\{(\s.*?\s*)*}\s*')

class_with_inheritance = re.compile(r'\b(public|private|protected)?\s+class\s+(\w+)\s+extends\s+(\w+)\s*\{(\s.*?\s*)*}\s*')

class_with_interface = re.compile(r'\b(public|private|protected)?\s+class\s+[A-Za-z_][A-Za-z0-9_]*\s+implements\s+[A-Za-z_][A-Za-z0-9_]*(?:\s*,\s*[A-Za-z_][A-Za-z0-9_]*)*\s*\{(\s.*?\s*)*}\s*')

object = re.compile(r'(\w+)\s+(\w+)\s*=\s*new\s+(\w+)\s*\(\)\s*;\s*')

object_with_params = re.compile(r'[A-Za-z_][A-Za-z0-9_]*\s+[A-Za-z_][A-Za-z0-9_]*\s*=\s*new\s+[A-Za-z_][A-Za-z0-9_]*\((.*?)\)\s*;\s*')

array_of_objects= re.compile(r'[A-Za-z_][A-Za-z0-9_]*\s*\[\]\s*[A-Za-z_][A-Za-z0-9_]*\s*=\s*new\s*[A-Za-z_][A-Za-z0-9_]*\s*\[\w+\]\s*;')

array_of_objects_with_initialization  = re.compile(r'[A-Za-z_][A-Za-z0-9_]*\s*\[\]\s*[A-Za-z_][A-Za-z0-9_]*\s*=\s*\{\s*new\s+[A-Za-z_][A-Za-z0-9_]*\(\)\s*(,\s*new\s+[A-Za-z_][A-Za-z0-9_]*\(\)\s*)*\};\s*')

array_of_objects_with_variable_size = re.compile(r'[A-Za-z_][A-Za-z0-9_]*\s*\[\]\s*[A-Za-z_][A-Za-z0-9_]*\s*=\s*new\s+[A-Za-z_][A-Za-z0-9_]*\s*\[\w+\]\s*;')

default_constructor= re.compile(r'\b(public|private|protected)?\s+\w+\(\)\s*\{(\s.*?\s*)*}\s*')

parameterized_constructor = re.compile(r'\b(public|private|protected)?\s+\w+\((\w+\s+\w+\s*(,\s*\w+\s+\w+\s*)*)?\)\s*\{(\s.*?\s*)*\}\s*')

field_declaration = re.compile(r'\b(private)\s+\w+\s+[A-Za-z_][A-Za-z0-9_]*\s*;')

basic_abstract_class = re.compile(r'\b(public|private|protected)?\s+abstract\s+class\s+[A-Za-z_][A-Za-z0-9_]*\s*\{\s*\}\s*')

abstract_class_declaration =  re.compile(r'\b(public|private|protected)?\s+abstract\s+class\s+[A-Za-z_][A-Za-z0-9_]*\s*(extends\s+[A-Za-z_][A-Za-z0-9_]*\s*)?\{(\s.*?\s*)*}\s*')

abstract_class_with_method = re.compile(r'\b(public|private|protected)?\s+abstract\s+class\s+[A-Za-z_][A-Za-z0-9_]*\s*\{\s*abstract\s+[A-Za-z_][A-Za-z0-9_]*\s+[A-Za-z_][A-Za-z0-9_]*\(\)\s*;\s*\}\s*')

abstract_class_with_constructor = re.compile(r'\b(public|private|protected)?\s+abstract\s+class\s+[A-Za-z_][A-Za-z0-9_]*\s*\{\s*public\s+[A-Za-z_][A-Za-z0-9_]*\(\)\s*\{\s*\}\s*\}\s*')

abstract_class_with_fields = re.compile(r'\b(public|private|protected)?\s+abstract\s+class\s+[A-Za-z_][A-Za-z0-9_]*\s*\{\s*\.*private\s+\w+\s+[A-Za-z_][A-Za-z0-9_]*\s*;\s*\.*\}\s*')

abstract_class_with_inheritance = re.compile(r'\b(public|private|protected)?\s+abstract\s+class\s+[A-Za-z_][A-Za-z0-9_]*\s+extends\s+[A-Za-z_][A-Za-z0-9_]*\s*\{(\s.*?\s*)*}\s*')










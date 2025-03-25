
from compiled_regex import *


java_dictionary = {
    "Int": (Int, 0),
    "String": (String, 0),
    "operator & expressions": (operator_and_expressions, 0),
    "float": (float_declaration, 0),
    "function": (function_declaration, 0),

    "simple class": (simple_class, 0),
    "class with inheritance": (class_with_inheritance, 0),
    "class with interface": (class_with_interface, 0),

    "object": (object, 0),
    "object with params": (object_with_params, 0),

    "simple array of objects": (array_of_objects, 0),
    "array of objects with initialization": (array_of_objects_with_initialization, 0),
    "array of objects with variable size": (array_of_objects_with_variable_size, 0),

    "default constructor": (default_constructor, 0),
    "parameterized constructor": (parameterized_constructor, 0),

    "field declaration": (field_declaration, 0),

    "basic abstract class": (basic_abstract_class, 0),
    "abstract class declaration": (abstract_class_declaration, 0),
    "abstract class with method": (abstract_class_with_method, 0),
    "abstract class with constructor": (abstract_class_with_constructor, 0),
    "abstract class with fields": (abstract_class_with_fields, 0),
    "abstract class with inheritance": (abstract_class_with_inheritance, 0),
}
def array_to_string(a):
  return ''.join(str(e) for e in a)

def create_phone_number(n):
  str1 = array_to_string(n[:3])
  str2 = array_to_string(n[3:6])
  str3 = array_to_string(n[6:])
  return f"({str1}) {str2}-{str3}"
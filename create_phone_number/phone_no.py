def create_phone_number(n):
  str1 = ''.join(str(e) for e in n[:3])
  str2 = ''.join(str(e) for e in n[3:6])
  str3 = ''.join(str(e) for e in n[6:])
  return f"({str1}) {str2}-{str3}"
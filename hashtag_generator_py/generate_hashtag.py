def generate_hashtag(s):
  formatted_str = s.title().replace(' ', '')

  if len(formatted_str) == 0 or len(formatted_str) > 139:
    return False

  return f"#{formatted_str}"

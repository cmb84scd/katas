def delete_nth(order, max_e):
    return [x for i, x in enumerate(order) if order[:i].count(x) < max_e]

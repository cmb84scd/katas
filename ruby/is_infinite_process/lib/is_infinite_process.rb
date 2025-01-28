def is_infinite_process(a, b)
  !(a <= b && (b - a).even?)
end

# This is the previous version of the above.
# I changed it due to rubocop warning: Style/IfWithBooleanLiteralBranches.

# def is_infinite_process(a, b)
#   if a <= b && (b - a).even?
#     false
#   else
#     true
#   end
# end

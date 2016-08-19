module Jekyll
  # A tag for selecting random elements from an array
  class RandomSort < Liquid::Tag
    Syntax = /(\w+[.]?\w+)\s+(\w+)/o

    def initialize(tag_name, markup, tokens)
      if markup =~ Syntax
        @collection_name = $1
        @randomized_name = $2
      else
        raise SyntaxError, "Syntax Error in 'randomsort' - Valid syntax: randomsort [source] [var]"
      end
      super
    end

    def render(context)
      collection = context[@collection_name]
      collection = collection.sort_by { rand }
      context[@randomized_name] = collection
    end
  end
end

Liquid::Template.register_tag('randomsort', Jekyll::RandomSort)

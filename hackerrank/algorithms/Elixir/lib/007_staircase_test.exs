defmodule StairCaseTest do
  use ExUnit.Case
  doctest StairCase

  test "StairCase" do
    assert StairCase.main(2) ==
" #
##\n"

    assert StairCase.main(3) ==
"  #
 ##
###\n"

    assert StairCase.main(7) ==
"      #
     ##
    ###
   ####
  #####
 ######
#######\n"
  end
end

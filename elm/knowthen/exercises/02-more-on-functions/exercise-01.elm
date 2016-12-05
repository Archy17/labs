-- Exercise 1
--
-- Create a new file named Exercise1.elm
-- Install the Html module
-- Write an infix function named ~= that takes two Strings and returns True when the first letter of each string is the same.
-- Call your new ~= function on 2 strings of your choosing and display the results on the page.
-- See the Completed Exercise in : ./CompletedExercises/Exercise1.elm
--
-- Hint: You're going to need some functions from the String Module http://package.elm-lang.org/packages/elm-lang/core/5.0.0/String


module Main exposing (..)

import Html
import String


-- infix function


(~=) a b =
    if String.left 1 a == String.left 1 b then
        True
    else
        False


main =
    Html.text (toString ("Eric" ~= "Elm"))

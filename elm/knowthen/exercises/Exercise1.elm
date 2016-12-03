module Main exposing (..)

import Html


greeting firstName secondName =
    "Welcome " ++ firstName ++ " " ++ secondName


main =
    Html.text (greeting "Eric" "Douglas")

<?php

function maximum(int $n1, int $n2) {
    if($n1 > $n2)
        return $n1;
    return $n2; 
}
echo(maximum(3, 5));


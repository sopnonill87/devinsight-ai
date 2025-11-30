<?php

function calculateTotal($items, $taxRate) {
    $subtotal = 0;

    foreach ($items as $item) {
        $subtotal += $item['price'] * $item['qty'];
    }

    $tax = $subtotal * $taxRate;
    return $subtotal + $tax;
}

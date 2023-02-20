# BookLookTracker
Simple app to track books read or in the process of being read. See 'live-view' [here](https://rajheer.github.io/BookLookTracker/).

The Odin Project (JavaScript) cirriculum. Brief set [here](https://www.theodinproject.com/lessons/node-path-javascript-library).

## About

Dynamic app to create 'record' cards in CSS grid. User interface via form to enter data, and generate card with key info, 'toggle' for 'read' status, and delete functionality.

## Implemented

1. Show/hide user input form with constraintAPI validation and 'live' custom error reporting.

2. FormData constructor to gather data into object then feed into 'Book' constructor (as brief required). Push 'Book' instance in array (no storage as of yet).

3. Dynamically generate new cards, set attributes, including custom data attributes to identify individual cards.

4. Functionality to identify and target specific cards to delete from page and array.

## To do

1. Fix toggle switch functionality for cards array index [1] upwards.

2. Add method on Book prototype that adds 'read' property and 'yes' / 'no' value e.g. find instance in array via ID placed on 'read?' toggle switch and then call method.

# BookLookTracker
Simple app to track books read or in the process of being read. See 'live-view' [here](https://rajheer.github.io/BookLookTracker/).

The Odin Project (JavaScript) cirriculum. Brief set [here](https://www.theodinproject.com/lessons/node-path-javascript-library).

## About

Dynamic app to create 'record' cards in CSS grid. User interface via form to enter data, and generate card with key info, 'toggle' for 'read' status, and delete functionality. Book records generate with 'class' pattern and method added to prototype.

## Implemented

1. Show/hide user input form with constraintAPI validation and 'live' custom error reporting.

2. FormData constructor to gather data into object then feed into 'Book' constructor (as brief required). Push 'Book' instance in array (no storage as of yet). UPDATED - Now refactored into 'class' with method added to prototype.

3. Dynamically generate new cards, set attributes, including custom data attributes to identify individual cards.

4. Functionality to identify and target specific cards to delete from page and array.

5. Custom method on Book prototype that adds a 'read' property to instance and toggles 'yes' / 'no' value as per the 'read?' toggle switch.

## To do

1. Bug where first click on '+' button doesn't open form.

2. Refactor code (modules, use closure, remove global variables etc);

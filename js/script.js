// Created by: Fetuha
// Created on: Mar 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates volume.
 */
function calculateVolumeOfPyramid() {
  // input
  const baseLength = parseInt(document.getElementById('base-length').value)
  const baseWidth = parseInt(document.getElementById('base-width').value)
  const heighOfPyramid = parseInt(document.getElementById('height').value)

  // process
  const volumeOfPyramid = (baseLength * baseWidth * heighOfPyramid) / 3

  // output
  document.getElementById("volume").innerHTML = 'Volume is: ' + volumeOfPyramid + ' mm<sup>3'
}
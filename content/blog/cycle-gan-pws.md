---
title: Application of CycleGAN to PWS Birthmarks Removal
description: A research project utilizing CycleGAN architecture to translate between images of healthy faces and faces affected by PWS (Port Wine Stain Birthmark)
date: 2024-05-01
tags: ["AI applications", "GANs", "cycleGAN", "PyTorch"]
technologies: "PyTorch, Python"
GHlink: https://github.com/szczekulskij/cycleGAN-pws/
---

## Background - PWS Birthmarks

Port-Wine Stains (PWS) are birthmarks caused by capillary malformations, appearing as persistent red or purple skin discolorations. PWS are usually present at birth and can occur anywhere on the body, but most commonly on the face, which is the focus of our data.

Treatment for PWS birthmarks often requires multiple laser sessions for cosmetic reduction, with improvement typically around ~60% as measured by the % GCE metric. This can vary depending on factors such as age and gender.

## Background - GANs

Generative Adversarial Networks (GANs) are a class of machine learning frameworks where two neural networks contest with each other in a game. The generator creates synthetic data while the discriminator evaluates it, leading to increasingly realistic outputs.

## CycleGAN Architecture

CycleGAN is particularly suited for this task because it enables unpaired image-to-image translation. Unlike traditional GANs that require paired training data, CycleGAN can learn mappings between two domains without one-to-one correspondence between training images.

This is crucial for our application because obtaining perfectly paired before/after treatment images is extremely difficult in clinical settings.

## Results

Our CycleGAN implementation successfully learned to translate between healthy face images and PWS-affected faces, providing a tool for:

1. Predicting treatment outcomes
2. Visualizing potential results for patients
3. Generating synthetic training data for other ML models

The work was presented at ASLMS 2024.

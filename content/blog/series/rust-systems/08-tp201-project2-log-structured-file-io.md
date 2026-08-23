<!-- TODO: DO NOT INCLUDE IN WEBSITE YET -->

---
title: "#08 - TP 201 Project 2: Log-Structured File I/O"
description: "Building a persistent key/value store using log-structured storage (bitcask)."
date: 2026-08-16
seriesOrder: 8
tags: ["rust", "kv-store", "storage"]
---

## Overview

**Course**: TP 201 - Practical Networked Applications in Rust
**Project 2**: Log-Structured File I/O

**Task**: Create a persistent key/value store that can be accessed from the command line.

**Goals**:
- Handle and report errors robustly
- Use serde for serialization
- Write data to disk as a log using standard file APIs
- Read the state of the key/value store from disk
- Map in-memory key-indexes to on-disk values
- Periodically compact the log to remove stale data

## Readings
### Reading 1: Damn Cool Algorithms: Log structured storage
### Reading 2: The Design and Implementation of a Log-Structured File System
### Reading 3: Bitcask
### Reading 4: std::collections & std::io

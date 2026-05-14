---
title: Replicating Dropbox Based on RAFT Consensus Algorithm
description: A 12-week long class project focused on creating a Dropbox-like system that can work in a distributed system setting
date: 2024-05-01
tags: ["distributed systems", "Golang", "RPC"]
technologies: "Golang, RPC"
GHlink: https://github.com/szczekulskij/CSE-224
---

## What Problem Does RAFT Solve?

In distributed systems, achieving consensus among multiple nodes is a fundamental challenge. RAFT is a consensus algorithm designed to be understandable while providing the same guarantees as Paxos.

Key concepts:
- **Leader Election**: Nodes elect a leader to coordinate operations
- **Log Replication**: The leader replicates its log to followers
- **Quorum**: A majority of nodes must agree for operations to commit

## Dropbox Implementation

Our implementation creates a file synchronization system that:
- Maintains consistency across multiple servers
- Handles server failures gracefully
- Supports concurrent client operations

## gRPC Integration

We used gRPC for efficient communication between nodes, leveraging:
- Protocol Buffers for serialization
- Bidirectional streaming for real-time sync
- Built-in load balancing support

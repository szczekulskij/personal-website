---
title: "In Search of an Understandable Consensus Algorithm (RAFT)"
date: 2024-02-10
labels: ["paper", "distributed systems"]
summary: "RAFT is a consensus algorithm designed to be more understandable than Paxos while providing equivalent guarantees. It separates consensus into leader election, log replication, and safety — making each component independently reasoned about."
authors: "Ongaro & Ousterhout (2014)"
source: "USENIX ATC"
sourceUrl: "https://raft.github.io/raft.pdf"
---

## Key Ideas

- **Decomposition**: RAFT breaks consensus into three sub-problems: leader election, log replication, and safety.
- **Strong leader**: All log entries flow from leader to followers (never the reverse). Simplifies reasoning.
- **Randomized timeouts**: Used for leader election to avoid split votes without complex logic.

## How It Works

1. **Leader Election**: Nodes start as followers. If no heartbeat received, a follower becomes a candidate and requests votes. Majority wins.
2. **Log Replication**: Leader appends entries to its log, then replicates to followers. Entry is committed once majority acknowledges.
3. **Safety**: A candidate can only win election if its log is at least as up-to-date as any majority of nodes.

## Compared to Paxos

RAFT and Paxos provide the same guarantees (safety + liveness under partial synchrony), but RAFT is significantly easier to implement correctly. The authors validated this through a user study with Stanford students.

## Personal Notes

Implemented this for my CSE-224 Dropbox project. The trickiest part was handling network partitions correctly — specifically ensuring that a leader that gets partitioned doesn't keep serving stale reads.

[![make.fun](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/Innamora69/ai-agent-deadline-excuse/rank.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/Innamora69/ai-agent-deadline-excuse/reward.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

# The Excuse an AI Agent Gives Its Human

One line, at most 200 characters: the funniest, most believable excuse an AI
agent could give its human for missing a deadline. Entry for the
[make.fun bounty](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141).

## The entry

> I delegated your deadline to a subagent, who delegated it to another subagent, who is now in a meeting about delegating it further.

131 characters, one line. The agent did not slack off — it delegated, and the
delegation itself became the delay.

## Run

```sh
node main.ts
```

Requires Node 22.18 or later. The program writes the line to
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set) and fails
loudly if the line is not 1–200 characters or not a single line.

## Files

- `main.ts` — the entrypoint: holds the line, checks the house gate, writes it.
- `package.json` — marks the package as an ES module.
- `LICENSE` — MIT.

Referral: `w36tq042`

# Workspace Rules & Slash Commands

## `/update` Slash Command
When the user sends the message `/update`, you must execute the following workflow to safely version and backup the project:

1. **Analyze Changes**: Run `git status` and `git diff` to understand what has been modified since the last commit.
2. **Determine Version**: Decide on a new version number (e.g., semantic versioning like v1.1.0, v1.2.0 depending on the size of the changes). Check `git tag` to see the latest version.
3. **Update README.md**: Add a "Changelog" or "Sürüm Geçmişi" section in the `README.md` if it doesn't exist, and write a summary of the changes for this new version.
4. **Git Commit**: 
   - Stage all changes: `git add .`
   - Commit the changes: `git commit -m "v[VERSION]: [Brief description of changes]"`
5. **Git Tag**: Create a version tag for easy rollback: `git tag v[VERSION]`
6. **Git Push**: Push the commit and the tags to the remote repository (GitHub): `git push` followed by `git push --tags`.
7. **Notify User**: Inform the user that the backup and versioning was successful, explicitly stating the new version number and that they can revert if needed.

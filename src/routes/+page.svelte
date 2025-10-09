<script lang="ts">
	import { addEntry, clear, getList } from './list.remote';
</script>

List

<svelte:boundary>
	{#snippet pending()}
		<p>Loading...</p>
	{/snippet}
	{#snippet failed()}
		<p>Failed to load entries</p>
	{/snippet}
	<form
		{...addEntry.enhance(async ({ form, data, submit }) => {
			try {
				form.reset();
				await submit().updates(getList().withOverride((list) => [...list, 420]));

				console.log('Entry created');
			} catch (error) {
				console.error('Failed to create entry', error);
			}
		})}
	>
		<button type="submit">Add Entry</button>
	</form>
	<form {...clear}>
		<button type="submit">Clear</button>
	</form>

	<pre>{JSON.stringify(await getList(), null, 2)}</pre>
</svelte:boundary>

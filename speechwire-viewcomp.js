
$(document).ready(() => {
	console.log("running viewcomp");

	let currentUrl = window.location.toString();

	const sectionIdRegex = new RegExp("sectionid=(\\d{1,4})");
	const judgeIdRegex = new RegExp("judgeid=(\\d{1,4})");
	const compIdRegex = new RegExp("compid=(\\d{1,4})");
	const compIdMatch = compIdRegex.exec(currentUrl);
	const compId = compIdMatch[1];

	$("table.dd").eq(1).find("tr.tableheader").each((row, tr) => {
		const newTD = document.createElement("td");
		newTD.textContent = "Critique";
		newTD.classList.add("dd");
		tr.append(newTD);
	});

	$("table.dd").eq(1).find("tr:not(.tableheader)").each((row, tr) => {
		const newTD = document.createElement("td");
		newTD.classList.add("dd");
		$(newTD).attr("align", "center");
		const newA = document.createElement("a");

		const sectionTd = tr.children[0];
		const judgeTd = tr.children[1];
		const sectionA = $(sectionTd).find("a").first()
		const sectionHref = sectionA.attr("href");
		const sectionMatch = sectionIdRegex.exec(sectionHref);
		const sectionId = sectionMatch[1];
		const judgeA = $(judgeTd).find("a").first()
		const judgeHref = judgeA.attr("href");
		const judgeMatch = judgeIdRegex.exec(judgeHref);
		const judgeId = judgeMatch[1];
		console.log(sectionId);
		console.log(judgeId);

		let query = "sectionid=" + sectionId + "&judgeid=" + judgeId + "&compid=" + compId;
		const url = "/tabroom/eballot-view-speech-comments.php?" + query;

		$(newA).attr("href", url);
		$(newA).text("View");
		$(newTD).append(newA);
		$(tr).append(newTD);
	});
});

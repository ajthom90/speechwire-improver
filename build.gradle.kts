
plugins {
	distribution
}

val doZip = task<Zip>("packageForCWS") {
	from(".") {
		include("ext/jquery.js")
		include("speechwire-*.js")
		include("manifest.json")
		include("SWI*.png")
	}

	archiveFileName.set("speechwire-improver.zip")

	into("")
}

tasks.getByName("build") {
	dependsOn(doZip)
}

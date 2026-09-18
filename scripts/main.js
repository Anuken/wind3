Events.on(ClientLoadEvent, e => {
    let file = Vars.tree.get("sounds/environment/wind3.ogg");
    let res = Seq();
    Core.assets.getAll(Sound, res);
    res.each(s => s.file = file);
});

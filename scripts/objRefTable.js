const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Plugins.Shape3D,
		C3.Plugins.filechooser,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Behaviors.Anchor,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.System.Acts.RestartLayout
	];
};
self.C3_JsPropNameTable = [
	{Платформер: 0},
	{Спрайт: 0},
	{"3DФигуры": 0},
	{ВыборФайла: 0},
	{ТайловыйФон: 0},
	{Спрайт2: 0},
	{Твёрдый: 0},
	{Спрайт3: 0},
	{Якорь: 0},
	{Текст: 0},
	{Спрайт4: 0},
	{вапорывапр: 0}
];

self.InstanceType = {
	Спрайт: class extends self.ISpriteInstance {},
	_3DФигуры: class extends self.I3DShapeInstance {},
	ВыборФайла: class extends self.IWorldInstance {},
	ТайловыйФон: class extends self.ITiledBackgroundInstance {},
	Спрайт2: class extends self.ISpriteInstance {},
	Спрайт3: class extends self.ISpriteInstance {},
	Текст: class extends self.ITextInstance {},
	Спрайт4: class extends self.ISpriteInstance {}
}